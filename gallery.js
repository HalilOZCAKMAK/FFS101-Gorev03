document.addEventListener('DOMContentLoaded', function () {
    var images = document.querySelectorAll('.gallery-image');

    images.forEach(function (image) {
        image.addEventListener('click', function () {
            var modalImage = document.getElementById('modal-image');
            modalImage.src = this.src;
            $('#imageModal').modal('show');
        });
    });
});
