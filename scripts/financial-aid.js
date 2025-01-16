document.getElementById('financial-aid-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const category = document.getElementById('category').value;
    const age = document.getElementById('age').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const reason = document.getElementById('reason').value;

    const message = `Name: ${name}\nCategory: ${category}\nAge: ${age}\nAddress: ${address}\nPhone: ${phone}\nReason: ${reason}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+256701573593?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
});