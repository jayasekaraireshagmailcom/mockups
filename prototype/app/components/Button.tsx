import Button from '@material-ui/core/Button';

export default function ButtonComponent(props:Button) {
    const {variant,text,href,fnc,type,disabled} = props;
    return (
        <Button variant={variant} href={href} onClick={fnc} type={type} disabled={disabled}>
            {text}
        </Button>
    )
}