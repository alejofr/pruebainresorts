import { Route, Routes } from 'react-router-dom';
import { CamisasProvider } from '../context';
import { Bienvenida, DashBoard, Pokemon, CamisasList, AddCamisa, EditCamisa, ShowCamisa } from '../pages';
import { MainLayout } from '../components/layouts';


export const InresortsRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Bienvenida />} />
        <Route path="dashboard" element={
          <MainLayout>
            <DashBoard />
          </MainLayout>
        } />
        <Route path="pokemon/:id" element={
          <MainLayout>
            <Pokemon />
          </MainLayout>
        } />
        <Route 
          path='camisas/*' 
          element={ 
            <CamisasProvider>
              <Routes>
                <Route path="" 
                  element={
                    <MainLayout>
                      <CamisasList />
                    </MainLayout>
                  } 
                />
                <Route path="add" 
                  element={
                    <MainLayout>
                      <AddCamisa />
                    </MainLayout>
                  } 
                />
                <Route path="edit/:id" 
                  element={
                    <MainLayout>
                      <EditCamisa />
                    </MainLayout>
                  } 
                />
                <Route path="show/:id" 
                  element={
                    <MainLayout>
                      <ShowCamisa />
                    </MainLayout>
                  } 
                />
              </Routes>
            </CamisasProvider>
          } 
        />
      </Routes>
    </>
  )
}
