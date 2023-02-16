import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import { UserProvider } from 'hooks/useUserInfo';
import { getAllBooks } from 'api.js';
import { ScrollToTop } from 'services/scrollToTop';
import { Protected } from 'hoc/Protected';
import { Layout } from "pages/layout/Layout"
import { BooksCatalog } from 'pages/booksCatalog/BooksCatalog'
import { SingleBook } from 'pages/singleBook/SingleBook';
import { SingIn } from 'pages/singIn/SingIn';
import { Cart } from 'pages/cart/Cart';

import { NotFoundPage } from 'pages/notFoundPage/notFoundPage';

// import 'App.scss'




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [userName, setUserName] = useState(localStorage.getItem('userName') || '');
  const [booksCatalog, setBooksCatalog] = useState([]);
  const [cartStore, setCartStore] = useState(JSON.parse(localStorage.getItem("orderCart")) || []);

  // console.log(auth);

  useEffect(() => {

    getAllBooks().then((data) => {
      setBooksCatalog(data.books);
    });
    // setIsLoggedIn(auth);
    // setUserName(newUser);
    // setCartStore(order);

  }, []);




  return (

    <UserProvider
      value={{
        booksCatalog,
        userName,
        setUserName: (i) => setUserName(i),
        isLoggedIn,
        setIsLoggedIn: (f) => setIsLoggedIn(f),
        cartStore,
        setCartStore: (p) => setCartStore(p),
      }}
    >
      <HashRouter>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<SingIn />} />
            <Route path="cart" element={
              <Protected isLoggedIn={isLoggedIn}>
                <Cart />
              </Protected>} />
            <Route path="x-course-task" element={
              <Protected isLoggedIn={isLoggedIn}>
                <BooksCatalog />
              </Protected>
            } />
            <Route path="x-course-task/:idBook" element={
              <Protected isLoggedIn={isLoggedIn}>
                <SingleBook />
              </Protected>
            } />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </UserProvider>


  );

}

export default App;
