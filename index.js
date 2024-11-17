const book = {
    title: "F. Scott Fitzgerald",
    author: "The Great Gatsby",
    isAvailable: true,



}


function borrow(book){
    if(this.isAvailable){
        this.isAvailable = false;
        console.log("Book with title: ${this.title} borrowed")
    }

    else{
        console.log("Book with title: ${this.title} is not available")
    }
}




function returnBook(book){
    this.isAvailable = true;
    console.log(" Book with title: ${this.title}")
}



function info(book){
    console.log(`title: ${this.title}`);
    console.log(`author: ${this.author}`);
    console.log(`isAvailable: ${this.isAvailable}`);
}




info.call(); 
borrow.call(); 
borrow.call(); 
returnBook.call(); 
info.call(); 