


var map;
function initMap() {

    var kolkata = {
        lat: 22.5726,
        lng: 88.3639
    }
    map = new google.maps.Map(document.getElementById('map'), {
        center: kolkata,
        zoom: 8
    });
    displayStores();
}

function displayStores() {
    var html = "";
    stores.forEach(function (store, index) {

        var add = store.addressLines;
        var ph = store.phoneNumber;
        console.log(store);
        html += `
        <div class="store-container">
                <div class='store-info-container'>
                    <div class="store-address">
                        <span style="display: block;"> ${add[0]}</span>
                        <span>${add[1]}</span>

                    </div>

                    <div class="store-phone-number">
                        ${ph}
                    </div>
                </div>
                <div class="store-number-container">
                    <div class="store-number">
                        ${index + 1}
                    </div>
                </div>
            </div>
        `
    });
    document.querySelector(".stores-list").innerHTML = html;


}