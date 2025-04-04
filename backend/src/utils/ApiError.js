class ApiError extends Error{
    constructor(
        statuscode,
        message="something went wrong",
        errors = [],
        stack = ""
    ){
        super(message),
        this.data=null,
        this.success = false,
        this.statuscode=statuscode,
        this.message = message,
        this.errors = errors
        
        if(stack){
            this.stack=stack
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {ApiError}