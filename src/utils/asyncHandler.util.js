const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next) // Call the function
    } catch (error) {
        // Pass the error to the error handler
        next(error)
    }
}

module.exports = asyncHandler
