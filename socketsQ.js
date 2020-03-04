/** 
 * 
 * Listen(Socket[C]) -> Socket[l]
 * Accept(Socket[l]) -> Socket[C] // blocking 
 * Read(Socket[C]) -> text //blocking 
 * Write(text) -> Socket[C] 
 * Select([Socket[*]]) -> [Socket[*]]
 * 
 * How to prevent blocking in Accept and Read ? 
 * 
 * Clue: implement functions similar to async and await 
 */
