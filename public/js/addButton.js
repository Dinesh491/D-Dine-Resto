document.addEventListener("DOMContentLoaded", async function () {
    const viewCart = document.querySelector(".view-cart");
    const itemNums = document.querySelector(".item-nums");
    let totalItems = 0;

    const currentPath = window.location.pathname;

    if (currentPath.includes("viewCart")) {
        if (viewCart) {
            viewCart.classList.add("hidden");
        }
        return;
    }

    try {
        const res = await fetch("/api/cart-count");
        const data = await res.json();
        totalItems = data.totalItems || 0;

        if (totalItems > 0) {
            itemNums.textContent = `${totalItems} item(s) added`;
            if (viewCart) {
                viewCart.classList.remove("hidden");
            }
            // 🆕 Activate cart flag
            sessionStorage.setItem("cartActive", "true");
        } else {
            if (viewCart) {
                viewCart.classList.add("hidden");
            }
            // 🆕 Deactivate cart flag
            sessionStorage.setItem("cartActive", "false");
        }
    } catch (err) {
        console.error("Error fetching cart count:", err);
    }

    attachAddButtonListener();

    function attachCounterListeners(counterDiv) {
        const quantitySpan = counterDiv.querySelector(".quantity");
        const incrementBtn = counterDiv.querySelector(".increment");
        const decrementBtn = counterDiv.querySelector(".decrement");

        const parentCard = counterDiv.closest(".item-card");
        const itemId = parentCard.dataset.id;

        incrementBtn.addEventListener("click", async () => {
            let currentQuantity = parseInt(quantitySpan.textContent, 10);
            quantitySpan.textContent = currentQuantity + 1;
            totalItems++;
            itemNums.textContent = `${totalItems} item(s) added`;
            sessionStorage.setItem("cartActive", "true"); // ✅ Ensure cart is marked active
            await updateSession(itemId, currentQuantity + 1);
        });

        decrementBtn.addEventListener("click", async () => {
            let currentQuantity = parseInt(quantitySpan.textContent, 10);
            if (currentQuantity > 1) {
                quantitySpan.textContent = currentQuantity - 1;
                totalItems--;
                itemNums.textContent = `${totalItems} item(s) added`;
                if (totalItems === 0) {
                    sessionStorage.setItem("cartActive", "false"); // ✅ No items = deactivate
                }
                await updateSession(itemId, currentQuantity - 1);
            } else {
                const parentContainer = counterDiv.parentElement;
                const img = parentContainer.querySelector("img");
                parentContainer.innerHTML = `
                    <img src="${img.src}" alt="${img.alt}" />
                    <button class="btn add-btn">ADD</button>
                `;
                attachAddButtonListener();
                totalItems--;
                itemNums.textContent = `${totalItems} item(s) added`;
                if (totalItems === 0 && viewCart) {
                    viewCart.classList.add("hidden");
                    sessionStorage.setItem("cartActive", "false"); // ✅ No items left
                }
                await updateSession(itemId, 0);
            }
        });
    }

    async function updateSession(id, quantity) {
        try {
            const response = await fetch("/session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id, quantity }),
            });
            const data = await response.json();
            console.log("Session updated:", data);
        } catch (error) {
            console.error("Error updating session:", error);
        }
    }

    function attachAddButtonListener() {
        let buttons = document.querySelectorAll(".add-btn");

        buttons.forEach((btn) => {
            btn.addEventListener("click", async () => {
                totalItems++;
                itemNums.textContent = `${totalItems} item(s) added`;

                if (totalItems > 0 && viewCart) {
                    viewCart.classList.remove("hidden");
                }

                sessionStorage.setItem("cartActive", "true"); // ✅ Mark cart as active

                const parentContainer = btn.parentElement;
                const parentCard = btn.closest(".item-card");
                const img = parentContainer.querySelector("img");
                const itemId = parentCard.dataset.id;

                parentContainer.innerHTML = `
                    <img src="${img.src}" alt="${img.alt}" />
                    <div class="counter">
                        <button class="decrement">-</button>
                        <span class="quantity">1</span>
                        <button class="increment">+</button>
                    </div>
                `;
                const newCounter = parentContainer.querySelector(".counter");
                attachCounterListeners(newCounter);

                await updateSession(itemId, 1);
            });
        });
    }
});
