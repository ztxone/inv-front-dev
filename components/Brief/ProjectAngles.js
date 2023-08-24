import { useFormContext } from "react-hook-form";

export const ProjectAngles =()=>{
    const { setValue, getValues } = useFormContext();
    const addOne=()=>{
        const value = getValues('ProjectAngles')
        if(value < 10)setValue('ProjectAngles', value+1)
    }

    const subtractOne = ()=>{
        const value = getValues('ProjectAngles')
        if(value > 1)setValue('ProjectAngles', value-1)
    } 
    return (
      <div className='custom-number-input h-10.5 mt-3.8 w-full'>
        <div className='flex flex-row h-10.5 rounded-5xl relative bg-transparent w-36'>
          <button
            onClick={subtractOne}
            data-action='decrement'
            className=' bg-black-russian text-white hover:text-gray-700 hover:bg-gray-400 h-full w-2/6 rounded-l-5xl cursor-pointer outline-none'
          >
            <span className='m-auto text-2xl font-thin'>−</span>
          </button>
          <input
            type='number'
            className='outline-none focus:outline-none text-center bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 w-2/6'
            name='custom-input-number'
            value={getValues('ProjectAngles')}
          ></input>
          <button
            onClick={addOne}
            data-action='increment'
            className='bg-black-russian text-white hover:text-gray-700 hover:bg-gray-400 h-full w-2/6 rounded-r-5xl cursor-pointer'
          >
            <span className='m-auto text-2xl font-thin'>+</span>
          </button>
        </div>
      </div>
    );
  }
    