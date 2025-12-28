import React, {useId} from 'react'

/**
 * InputBox Component
 * * KEY CONCEPTS EXPLAINED:
 * 1. Component Reusability: By passing props, this single component can be used for 
 * both 'From' and 'To' currency fields, reducing code duplication.
 * * 2. Controlled Components: The 'amount' and 'selectCurrency' are controlled by the 
 * parent component's state. This ensures a "single source of truth."
 * * 3. Event Bubbling (Lifting State Up): Instead of handling logic here, the component 
 * calls functions like 'onAmountChange' passed from the parent. This notifies the 
 * parent that the user has interacted with the UI.
 * * 4. The useId Hook: Generates unique IDs for accessibility. It links the <label> 
 * to the <input> safely, even if multiple instances of this component exist on 
 * the same page.
 */

function InputBox({
    label,              // Label text (e.g., "From" or "To")
    amount,             // The numerical value shown in the input
    onAmountChange,     // Callback function when amount changes
    onCurrencyChange,   // Callback function when currency selection changes
    currencyOption = [],// Array of available currencies (e.g., ["usd", "eur", "inr"])
    selectCurrency = "usd", // Currently selected currency
    amountDisable = false,  // Boolean to toggle input interactivity
    currencyDisable = false,// Boolean to toggle dropdown interactivity
    className = "",     // Custom CSS classes from the parent
}) {
   
    // Generates a unique ID for the input field to link with the label's 'htmlFor'
    const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            {/* Left Section: Amount Input */}
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    // CONCEPT: Defensive Programming. 
                    // We check if 'onAmountChange' exists before calling it to avoid crashes.
                    // Also, we wrap e.target.value in Number() because input values are strings by default.
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>

            {/* Right Section: Currency Selection */}
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {/* CONCEPT: List Rendering
                        We map through the currencyOption array to create <option> tags.
                        The 'key' attribute is vital for React's reconciliation process 
                        to optimize performance during re-renders. */}
                    {currencyOption.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))} 
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;