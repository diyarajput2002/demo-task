import Navbar from './components/Navbar';
import Toolbar from './components/Toolbar';
import Links from './components/Links';
import Table from './components/Table';

export default function Home() {
  return (
    <div className="relative min-h-screen">
        <Navbar />
      <Toolbar/>
      <div className='flex'>
      <Table/>
      <Links/>
      </div>
    </div>
  );
}
