const useLogic = () => {
    
    const isTrue = (data: any) => {
        return Boolean(data) 
    }

    const isFalse = (data: any) => {
        return Boolean(data) 
    }

    const isNull = (data: any) => {
        return data === null
    }

    const isUndefined = (data: any) => {
        return data === undefined
    }
   
    const isZero = (data: number | string) => {
        if(typeof(data) === 'number')
            return data === 0
        else if(typeof(data) === 'string')
            return data === '0'
    }

    const isEven = (data: number) => {
        return data % 2 === 0
    }

    const isOdd = (data: number) => {
        return data % 2 !== 0
    }
  
    return  {
        isTrue,
        isFalse,
        isNull,
        isUndefined,
        isZero,
        isEven,
        isOdd
    }
}

export default useLogic
