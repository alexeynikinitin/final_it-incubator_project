import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './Checkbox.module.css'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type CheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
}

export const Checkbox: React.FC<CheckboxPropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeChecked,
        className, spanClassName,
        children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
       onChange && onChange(e)

       onChangeChecked && onChangeChecked(e.currentTarget.checked)
        // сделайте так чтоб работал onChange и onChangeChecked
    }

    const finalInputClassName = `${s.checkbox} ${className ? className : ''}`

    return (
        <label className={finalInputClassName}>
            <input
                type={'checkbox'}
                onChange={onChangeCallback}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (checked например там внутри)
            />
            {children ? <span className={s.spanClassName}>{children}</span> : <span> </span>}
        </label> // благодаря label нажатие на спан передастся в инпут
    )
}
