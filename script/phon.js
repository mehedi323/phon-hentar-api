//  const loadPhone = async (searchText) =>{
//   const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
//   const data = await res.json();
//   const phones = data.data;
//   displayPhones(phones)
//  }

//  const displayPhones = phones =>{
//   const phoneContainer = document.getElementById('card-container');
//   phoneContainer.textContent = '';
//   phones = phones.slice(0 , 12);
//     phones.forEach(phone => {
//       console.log(phones)
//       const phoneCard = document.createElement('div');
//       phoneCard.classList = `card text-black font-semibold pt-6 bg-gray-100 shadow-xl`;
//       phoneCard.innerHTML=`
//       <figure><img src ="${phone.image}" alt="Shoes" /></figure>
//       <div class="card-body">
//         <h2 class="card-title">${phone.phone_name}</h2>
//         <p>${phone.slug}</p>
//         <div class="card-actions justify-end">
//           <button class="btn btn-primary">Buy Now</button>
//         </div>
//       </div>
//       `
//       phoneContainer.appendChild(phoneCard) 
//     });
//  }

//  const handleSearchField = () =>{
//   const searchField =document.getElementById('search-field');
//   const searchText = searchField.value;
//   console.log(searchText);
//   loadPhone(searchText);
//  }

// //  loadPhone();