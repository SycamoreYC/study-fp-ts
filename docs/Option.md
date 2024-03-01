Task 1 - Safe Head: Implement a function safeHead that takes an array and returns an Option for the first element of the array. If the array is empty, it should return None. If the array has elements, it should return Some of the first element.

Task 2 - Safe Last: Similar to the first task, implement a function safeLast that returns an Option for the last element of an array.

Task 3 - Safe Property Access: Implement a function safeProp that takes an object and a property name, and returns an Option for the value of the property. If the property does not exist, it should return None.

Task 4 - Safe Parsing: Implement a function safeParseInt that takes a string and returns an Option for the parsed integer. If the string cannot be parsed to an integer, it should return None.

Task 5 - Use getOrElse: Use the getOrElse function to provide a default value when an Option is None. You can use this with the functions you implemented in the previous tasks.

Task 6 - Use map and chain: Use the map and chain functions to transform the values inside an Option. For example, you can use map to square a number inside an Option, or use chain to turn an Option<Option<number>> into an Option<number>.

Task 7 - Use fold: Use the fold function to handle both cases of an Option: when it's None and when it's Some. You can use this to print different messages depending on whether an Option contains a value or not.

Remember, the key to understanding Option is to remember that it represents an optional value: it can be Some(value) or None. The Option module provides functions like map, getOrElse, chain, and fold to work with this optional value in a safe way.