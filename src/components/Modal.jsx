const Modal = ({setDelModal}) => {
    setDelModal()
    return (
        <div className="absolute w-1/4 h-2/4 border-black left-20 flex-col bg-white drop-shadow-md p-6 text-lg z-20 top-50 md:left-72 md:w-2/4 md:h-2/5 rounded-lg ">
            <div className="flex flex-col mb-4">
                <button className='flex justify-end float-right mb-10 w-full' onClick={() => setDelModal(false)}>
                    X
                </button>
            <h1> Are you sure you want to Disable User</h1>
            </div>
            <div className='flex justify-around mt-8'>
            <button className='bg-blue-500 text-white p-4 w-1/4 rounded'> Yes</button>
            <button className=' p-4 w-1/4 rounded'> No, Cancel</button>
            </div>
            
        </div>
    );
};

export default Modal