
    document.addEventListener("DOMContentLoaded", function () {
        const dineInForm = document.querySelector('form[action="/dineIn"]');
        const deliveryForm = document.querySelector('form[action="/delivery"]');

        async function getCartCount() {
            try {
                const res = await fetch("/api/cart-count");
                const data = await res.json();
                return data.totalItems || 0;
            } catch (error) {
                console.error("Error fetching cart count:", error);
                return 0;
            }
        }

        function showSwitchAlert(targetUrl) {
    Swal.fire({
        icon: 'warning',
        title: 'Switch order type?',
        text: 'Your cart will be cleared if you switch order types. Do you want to proceed?',
        confirmButtonText: 'Yes, switch',
        cancelButtonText: 'No, stay',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6'
    }).then(async (result) => {
        if (result.isConfirmed) {
            //  Clear session cart on server
            try {
                await fetch("/clear-cart", {
                    method: "POST"
                });
                // Redirect after clearing
                window.location.href = targetUrl;
            } catch (error) {
                console.error("Failed to clear cart:", error);
                Swal.fire("Error", "Something went wrong while switching!", "error");
            }
        }
    });
}


        async function handleClick(e, targetUrl) {
            e.preventDefault();
            const totalItems = await getCartCount();
            const currentPath = window.location.pathname;

            const isSwitchingToDineIn = targetUrl.includes("/dineIn") && currentPath.includes("/delivery");
            const isSwitchingToDelivery = targetUrl.includes("/delivery") && currentPath.includes("/dineIn");

            if (totalItems > 0 && (isSwitchingToDineIn || isSwitchingToDelivery)) {
                showSwitchAlert(targetUrl);
            } else {
                window.location.href = targetUrl;
            }
        }

        if (dineInForm) {
            dineInForm.addEventListener("submit", function (e) {
                handleClick(e, "/dineIn");
            });
        }

        if (deliveryForm) {
            deliveryForm.addEventListener("submit", function (e) {
                handleClick(e, "/delivery");
            });
        }
    });

