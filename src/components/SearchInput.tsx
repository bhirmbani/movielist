import React from "react";

interface SIProps {
  isResult: boolean;
  placeholder?: string;
  ResultComponent: JSX.Element;
  value: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
}

const SearchInput = ({
  isResult,
  placeholder,
  ResultComponent,
  value,
  setValue,
  isLoading,
}: SIProps) => (
  <div className="w-full max-w-lg">
    <div className="w-full max-w-lg">
      <input
        onChange={setValue}
        value={value}
        type="text"
        placeholder={placeholder}
        className="input w-full max-w-lg"
      />
      {isLoading ? (
        <span className="w-full bg-transparent border-transparent btn loading" />
      ) : null}
    </div>
    {isResult ? ResultComponent : null}
  </div>
);

export default SearchInput;
