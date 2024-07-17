interface FieldErrorProps {
  fieldErrors?: []
}

export default function DisplayErrors(props: FieldErrorProps) {
  return props.fieldErrors?.map((e, i) => {
    return <div key={i} className="text-rose-500 text-sm">{e}</div>
  })
}