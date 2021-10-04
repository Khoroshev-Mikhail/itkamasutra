import css from './FormControls.module.css'

export const Element = Element => ({input, meta, ...props}) => {
    let hasErrors = meta.error && meta.touched
    return (
        <>
            <div>
                <Element {...input} {...props} className={css.formControl + ' ' + (hasErrors ? css.error : '')} />
            </div>
            {hasErrors && <span>{meta.error}</span>}
        </>
    )
}