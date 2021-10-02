import css from './FormControls.module.css'

export const TextArea = ({input, meta, ...props}) => {
    let hasErrors = meta.error && meta.touched
    return (
        <>
            <div>
                <textarea {...input} {...props} className={css.formControl + ' ' + (hasErrors ? css.error : '')} />
            </div>
            {hasErrors && <span>{meta.error}</span>}
        </>
    )
}