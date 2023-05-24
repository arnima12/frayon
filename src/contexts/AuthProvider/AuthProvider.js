import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from 'react-hot-toast';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    const [order, setOrder] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }
    const handleCart = (item) =>{
        const newCart = [...cart,item];
        setCart(newCart);
        const requestBody = {
          name: item.name,
          email: user.email,
          price:item.price,
          image:item.image
        };
        fetch('http://localhost:5000/cart', {
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(requestBody)
          })
              .then(res => res.json())
              .then(data => {
                  console.log(data)
                  if (data.acknowledged) {
                    
                    toast.success('Added to cart');
                }
                else {
                    toast.error(data.message);
                }
              }
              )
  
    }
    const buyNow = item =>{
        const newOrder = [...order,item];
        setOrder(newOrder);
        const requestBody = {
            name: item.name,
            email: user.email,
            price:item.price,
            image: item.image
          };
          console.log(requestBody)
          fetch('http://localhost:5000/order', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.acknowledged) {
                      
                      toast.success('Order Confirmed');
                      
                  }
                  else {
                      toast.error(data.message);
                  }
                }
    
                )
                fetch(`http://localhost:5000/cart/${item._id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            if(data.deletedCount>0){
               
                const remainingCart = cart.filter(product => product._id !== item._id)
                setCart(remainingCart);
            }
            });
            console.log(totalPrice)
    
    }
    const logout = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("user observing");
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, [])
    const authInfo = {
        createUser,
        loginUser,
        updateUser,
        loading,
        cart,
        setCart,
        order,
        setOrder,
        user,
        setUser,
        handleCart,
        buyNow,
        totalPrice,
        setTotalPrice,
        logout
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );

};

export default AuthProvider;