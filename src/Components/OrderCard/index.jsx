import { IoClose } from "react-icons/io5";

const OrderCard = props => {
    const {id, title, imageUrl, price, handleDelete} = props
    let renderIoClose 
    if(handleDelete) {
        renderIoClose = <IoClose onClick={() => handleDelete(id)} className='h-6 w-6 text-black cursor-pointer'></IoClose>
    }

return (
    <div className='flex justify-between items-center mb-3'>
        <div className='flex items-center gap-2'>
            <figure className='w-20 h-20'>
                <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title}/>
            </figure>
            <p className='text-sm font-light'>{title}</p>
        </div>
        <div className='flex items-center gap-2'>
            <p className='text-lg font-medium'>${price}</p>
            {renderIoClose}
        </div>
    </div>
)
}



export default OrderCard