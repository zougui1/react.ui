import { createContext, useContext, useState, useMemo, useCallback } from 'react';

export interface AutocompleteOption {
  value: string | number;
  label?: React.ReactNode;
}

export interface AutocompleteState {
  key: number;
  changeKey: () => void;
  allOptions: AutocompleteOption[];
  options: AutocompleteOption[];
  addOption: (option: AutocompleteOption) => void;
  removeOption: (option: AutocompleteOption) => void;
  editOption: (option: AutocompleteOption) => void;
  newOptions: AutocompleteOption[];
  addNewOption: (option: AutocompleteOption) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  values: (string | number)[];
  onValuesChange: (value: (string | number)[]) => void;
  multiple: boolean;
  creatable?: boolean;
  disabled?: boolean;
}

export const AutocompleteContext = createContext<AutocompleteState | undefined>(undefined);

export const AutocompleteProvider = ({ children, multiple, creatable, disabled, values, onValuesChange }: AutocompleteProviderProps) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<AutocompleteOption[]>([]);
  const [newOptions, setNewOptions] = useState<AutocompleteOption[]>([]);
  const [key, setKey] = useState(() => Math.random());

  const addNewOption = (newOption: AutocompleteOption) => {
    setNewOptions(prevNewOptions => {
      if (prevNewOptions.some(o => o.value === newOption.value)) {
        console.warn(`A new option with value "${newOption.value}" already exists.`);
        return prevNewOptions;
      }

      return [...prevNewOptions, newOption];
    });
  }

  const removeNewOption = useCallback((value: string | number) => {
    setNewOptions(prevNewOptions => {
      return prevNewOptions.filter(o => o.value !== value);
    });
  }, []);

  const addOption = useCallback((option: AutocompleteOption) => {
    setOptions(prevOptions => {
      if (prevOptions.some(o => o.value === option.value)) {
        console.warn(`An option with value "${option.value}" already exists.`);
        return prevOptions;
      }

      return [...prevOptions, option];
    });

    removeNewOption(option.value);
  }, [removeNewOption]);

  const removeOption = (option: AutocompleteOption) => {
    setOptions(prevOptions => {
      return prevOptions.filter(o => o.value !== option.value);
    });
  }

  const editOption = (option: AutocompleteOption) => {
    setOptions(prevOptions => {
      return prevOptions.map(o => o.value === option.value ? option : o);
    });
  }

  const handleValuesChange = useCallback((values: (string | number)[]) => {
    onValuesChange?.(values);

    setNewOptions(prevNewOptions => {
      return prevNewOptions.filter(o => values.includes(o.value));
    });
  }, [onValuesChange]);

  const state = useMemo(() => {
    return {
      allOptions: [...options, ...newOptions],
      options,
      addOption,
      removeOption,
      editOption,
      newOptions,
      addNewOption,
      removeNewOption,
      open,
      setOpen,
      values,
      onValuesChange: handleValuesChange,
      multiple,
      creatable,
      disabled,
      key,
      changeKey: () => setKey(Math.random()),
    };
  }, [
    open,
    values,
    handleValuesChange,
    multiple,
    creatable,
    options,
    addOption,
    newOptions,
    removeNewOption,
    disabled,
    key,
  ]);

  return (
    <AutocompleteContext.Provider value={state}>
      {children}
    </AutocompleteContext.Provider>
  );
}

export interface AutocompleteProviderProps {
  values: (string | number)[];
  onValuesChange?: (value: (string | number)[]) => void;
  multiple: boolean;
  creatable?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const useAutocomplete = (): AutocompleteState => {
  const context = useContext(AutocompleteContext);

  if (!context) {
    throw new Error('Cannot use table outside of the TableProvider tree');
  }

  return context;
}
