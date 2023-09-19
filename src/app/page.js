import Featured from '@/components/Featured'
import CategoryList from '@/components/CategoryList'
import CardList from '@/components/CardList'
import Menu from '@/components/Menu'


const Home = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1

  return (
    <div className=' bg-slate-100 dark:bg-blue-500 dark:bg-opacity-30 min-h-screen' >
      <Featured />
      <CategoryList />
      <div className='flex flex-col lg:flex-row gap-12 mt-8 ' >
        <CardList currentPage={page} />
        <Menu />
      </div>
    </div>
  )
}

export default Home
