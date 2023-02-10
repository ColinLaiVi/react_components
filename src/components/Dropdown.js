import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false)

    const dropdownEl = useRef()

    useEffect(() => {
        const handler = (e) => {
            if (!dropdownEl.current) {
                return
            }

            if (!dropdownEl.current.contains(e.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('click', handler, true)

        return () => {
            document.removeEventListener('click', handler)
        }
    }, [])

    const handleOptionClick = (option) => {
        setIsOpen(false)

        onChange(option)
    }

    const renderedOptions = options.map((option) => {
        return (
            <div key={option.value} className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => {handleOptionClick(option)}}>
                {option.label}
            </div>
        )
    })

    return (
        <div ref={dropdownEl} className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer" onClick={() => {setIsOpen(!isOpen)}}>
                {value?.label || 'Select...'}
                <GoChevronDown className="text-lg" />
            </Panel>
            {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
        </div>
    )
}

export default Dropdown