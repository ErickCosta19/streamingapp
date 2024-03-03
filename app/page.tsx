import { Movies } from "@/components/movies"




export default async function PageMovies(){
 
  return(
    <main className="container relative flex flex-col gap-8 px-4 pt-16">
      <h1 className="text-4xl">
        Movies
      </h1>
      <Movies/>
    </main>
  )
}
