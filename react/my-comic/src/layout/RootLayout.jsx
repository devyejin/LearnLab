import { Outlet } from 'react-router-dom';
import GlobalNavigationBar from '../component/public/GlobalNavigationBar';
import SubNavigationBar from '../component/public/SubNavigationBar';
import Footer from '../component/public/Footer';

export default function RootLayout() {
  return (
    <>
      <div className="container">
        <GlobalNavigationBar></GlobalNavigationBar>
      </div>
      {/* Global이랑 Sub를 분리하는게 맞는거같음. HOME화면에서는 Sub가 필요가 없으니까 */}
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
