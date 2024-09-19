import Image from "next/image";
import Link from "next/link";
import { CurrencyDollarIcon, ArchiveBoxIcon, ArchiveBoxXMarkIcon } from "@heroicons/react/24/solid";
import AddToCart from "./AddtoCart";

const BookCard = ({book}) => {
    return(
        <Link
            href={`/store/${book.id}`}>
            <div className="flex flex-col items-center rounded-xl bg-gray-50 p-2 m-2 shadow-sm">
                <div className="mb-2 h-13">
                <Image 
                    className="mr-2 rounded-md"
                    src={book.cover} 
                    alt={book.title} 
                    width={150} 
                    height={100} 
                    style={{height: '200px', width: 'auto'}}
                    priority={true} />
                </div>
                {book.title}
            </div>
            <div className="flex flex-col justify-around truncate rounded-xl bg-white px-4 py-8 w-full text-xs">
          <div className="flex justify-around">
            <div>{book.stock ? 
              <div className="flex">
                <ArchiveBoxIcon className="w-5 mr-1"/> 
                <span className="text-sm">{book.stock} in stock</span>
              </div> : 
              <div className="flex">
                <ArchiveBoxXMarkIcon className="w-5 mr-1"/>
                <span className="text-sm">No Stock</span>
              </div>  }</div> 
            <div className="flex">
              <CurrencyDollarIcon className="w-5 mr-0.5"/> 
              <span className="text-sm"> {book.sellPrice} to buy</span>
            </div>
          </div>
          <div className="mt-2 text-center">
            <p className="text-sm">Rent for {book.rentPrice} $ per month</p>
            <p className="text-xs">{book.isRented ? 
              `Currently this book is rented by ${book?.renterIds?.length} customer` : 
              `Currently no one has rented this book`}</p>
          </div>
          <AddToCart book={book} />
        </div>
        </Link>
        
    )
}

export default BookCard;
