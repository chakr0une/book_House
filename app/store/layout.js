import Sidebar from "../component/sidebar/SideBar"
import StoreProvider from "../provider"

export const metadata = {
  title: "Book-House",
  description: "An Online Bookstore to Buy / Rent and Sell Used Books",
}

export default function BookStoreLayout({ children }) {
  return (
    <StoreProvider>
      <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row min-h-screen">
        <Sidebar />
        <div className="flex flex-wrap p-2 justify-center w-full">
          {children}
        </div>  
      </div>
    </StoreProvider>
      
  )
}