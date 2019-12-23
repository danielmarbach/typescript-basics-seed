function orderError(error: string): never { // by default void return void
    throw new Error(error);
}

orderError('Something went wrong');