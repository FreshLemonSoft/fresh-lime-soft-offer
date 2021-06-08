<template>
  <router-view/>
</template>

<style lang="scss">
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

$bg-color: rgba(10, 31, 42, 0.95);
$lime-green: #55af2a;


@font-face {
    font-family: 'Rubik';
    src: url('./assets/fonts/Rubik/Rubik-Regular.ttf') format('truetype'); 
    font-style: normal;
    font-weight: 400;
}

@font-face {
    font-family: 'Rubik';
    src: url('./assets/fonts/Rubik/Rubik-Bold.ttf') format('truetype'); 
    font-style: normal;
    font-weight: 700;
}

body {
    height: 100%;
    background: #eee;
    font-family: 'Rubik';
    background: $bg-color;
    color: #fff;
}

.auth {
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 50%;
   margin: 20px auto;
   padding: 30px;
   transition: .5s ease;

   p {
      margin-top: 30px;
      transition: .5s ease;

      a {
         transition: .5s ease;
         line-height: 30px;
         border-bottom: 1px solid $lime-green;
         color: #fff;
         text-decoration: none;
         margin-left: 10px;
      }
   }

   &-btn {
      font-size: 13px;
      text-transform: capitalize;
   }

   &-type {
   margin-bottom: 30px;
   transition: .5s ease;
}
}

.content {
    max-width: 1300px;
    margin: 0 auto;
    transition: .5s ease;
}

.logo {
    img {
        display: block;
    }
}

.gif-wrap {
   margin: 50px auto;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 30%;

   img {
      border-radius: 10px;
      display: block;
      max-width: 100%;
      width: 100%;
   }  
}

.input-value {
    padding: 10px;                              
    padding-left: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    outline: none;
    border: 1px solid #ccc;
    transition: .5s ease;
    
    &:focus {
        transition: .5s ease;
        box-shadow: 0 0 10px 3px #ccc;
    }

    &[type=number] {
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }
}

.submit-btn {
   color: #fff;
   background: #55AF2A;
   outline: none;
   border: 1px solid transparent;
   padding: 10px;
   transition: .5s ease;
   border-radius: 15px;
   letter-spacing: 2px;
   grid-column-start: 3;
   grid-column-end: 5;
   font-size: 16px;
   text-transform: uppercase;
   font-weight: 700;
   cursor: pointer;
   
   &:hover {
       text-shadow: 0 0 10px #fff;
       border: 1px solid #fff;
       transition: .5s ease;
   }
}

.offer {
    background:$bg-color;
    width: 60%;
    text-align: left;
    padding: 20px;
    box-shadow: 0 0 25px 2px #ccc;
    border-radius: 10px;
    position: relative;
    margin: 50px auto !important;
    overflow: hidden;
    font-size: 20px;

    &::before {
        content: '';
        position: absolute;
        top: -1px;
        right: -1px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 50px 50px 0;
        border-color: transparent #55AF2A transparent transparent;

    }
}

.text {
    margin: 20px auto;
    line-height: 30px;
    word-spacing: 3px;
    cursor: default;
    color: #fff;
    
    a {
        color: #55AF2A;
        text-decoration: none;
        border-bottom: 2px dashed #fff;
    }
}

@media screen and (max-width: 1330px) {
   .content {
      max-width: 960px;
      transition: .5s ease;
   }

   .offer {
      width: 60%;
   }
}

@media screen and (max-width: 1025px){
   .offer {
      font-size: 18px;
      width: 70%;

   }

   .gif-wrap {
      width: 40%;
   }

}

@media screen and(max-width: 980px) {
   .content {
      max-width: 70%;
   }

   .text {
      line-height: 25px;
   }

   .submit-btn {
      grid-column-start: 2;
      grid-column-end: 6;
   }

   .offer {
      width: unset;
   }

   .gif-wrap {
      width: 50%;
   }
}

@media screen and (max-width: 630px) {
   .content {
      max-width: 80%;
   }

   .logo {
      &-icon {
         width: 80%;
      }
   }
   
   .submit-btn {
      font-size: 14px;
   }

   .gif-wrap {
      width: 60%;
   }

}

@media screen and (max-width: 420px) {
   .content {
      max-width: 90%;
   }

   .submit-btn {
      font-size: 12px;
   }

   .text {
      line-height: 20px;
   }
}
</style>