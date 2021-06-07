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
   .inputs {
      grid-template-columns: 1fr 1fr;
   }

   .offer {
      font-size: 18px;
      width: 70%;

      &-type {
         grid-row: 2 / 3;
         grid-gap: 5px 20px;
      }
   }

   .created-link {
      font-size: 18px;
   }

   .gif-wrap {
      width: 40%;
   }

}

@media screen and(max-width: 980px) {
   .content {
      max-width: 70%;
   }

   .contacts {
      li + li {
         margin-top: 5px;
      }
   }

   .text {
      line-height: 25px;
   }

   .submit-btn {
      grid-column-start: 2;
      grid-column-end: 6;
   }

   .offer,
   .created-link a,
   .contacts li {
      font-size: 16px;
   }

   .offer {
      width: unset;
   }

   .social {
      a {
         margin-right: 5px;

         &:last-child {
            margin: 0;
         }
      }
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

   .inputs {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, auto);
   }

   .offer-type {
      grid-template-columns: 1fr;
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row: unset;
   }

   .grid {
      grid-row-start: 1;
      grid-row-end: 2;
      grid-column-end: 7;
      
      & + .grid {
         grid-column-start: 1;
         grid-row-end: 3;
         grid-row-start: 2;
      }
   }

   .submit-btn {
      font-size: 14px;
   }

   .offer,
   .created-link a,
   .contacts li {
      font-size: 15px;
   }

   .created-link {
      overflow-wrap: break-word;
      word-wrap: break-word;
   }

   .gif-wrap {
      width: 60%;
   }

}

@media screen and (max-width: 420px) {
   .content {
      max-width: 90%;
   }

   .offer::before {
      border-width: 0 35px 35px 0;
   }
   
   .contacts {
      li {
         font-size: 12px;
      }
   }

   .text {
      line-height: 20px;
   }

   .social {
      a {
         width: 25px;
         height: 25px;
      }
   }
}
</style>
