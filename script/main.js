const loadPhone = async(searchText) =>{
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
  const data = await res.json();
  const phones = data.data;
  console.log(phones)
  displayPhones(phones );
}

const displayPhones = phones =>{
  const cardContainer = document.getElementById('card-container');

// card container clear------
  cardContainer.textContent = '';

// show all button----=---
  const showAllContainer = document.getElementById('show-all-container');
  if(phones.length = 12){
    showAllContainer.classList.remove('hidden');
  }
  else{
    showAllContainer.classList.add('hidden');
  }

  phones = phones.slice(0 , 12);
  phones.forEach(phones =>{
    const phoneCard = document.createElement('div');
     phoneCard.classList =`card text-black p-6 bg-violet-200 shadow-xl`;
     phoneCard.innerHTML = `
     <figure><img src="${phones.image}" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">${phones.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-center">
              <button onclick="handleShowDetails()";
               class="btn btn-primary">Buy Now</button>
            </div>
          </div>
     `;
     cardContainer.appendChild(phoneCard);
  })
  togolLoadingSpinner(false);
};


const handleShowDetails =async (id) =>{
    const res = await fetch(` https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    console.log(data)
}


const handleSearch = ( )=>{
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    loadPhone(searchText)
    togolLoadingSpinner(true);
}

// loading-spinner
  const togolLoadingSpinner =(itsTogol) =>{
    const loadingSpinner = document.getElementById('loading-spinner');
        if(itsTogol){
          loadingSpinner.classList.remove('hidden');
        }
        else{
          loadingSpinner.classList.add('hidden');
        }   
  };

 
// loadPhone();