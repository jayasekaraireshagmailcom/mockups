import TextField from '@mui/material/TextField';


export default function Input({id,label,variant,name,type,onChange}:Input) {
    
  return (
    <TextField id={id} label={label} variant={variant} name={name} type={type} onChange={onChange}/>
  )
}
