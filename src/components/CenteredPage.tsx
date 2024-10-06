
interface props{
    children: React.ReactNode
}
export default function CenteredPage(props:props) {
  return (
    <div className='flex grow flex-col justify-center items-center'>
        {props.children}
    </div>
  )
}