// Function to show the certificate image in a preview
function showCertificate(certImage) {
      const certPreview = document.getElementById('certificate-preview');
      const certImg = document.getElementById('cert-img');
    
      // Set the image source to the clicked certificate
      certImg.src = certImage;
      
      // Display the preview modal
      certPreview.style.display = 'flex';
    }
    
    // Function to hide the certificate preview
    function hideCertificate() {
      const certPreview = document.getElementById('certificate-preview');
      
      // Hide the preview modal
      certPreview.style.display = 'none';
    }
    