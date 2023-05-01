function checkTextAreaMaxLength(textBox) {
    const maxLength = parseInt(textBox.getAttribute("maxlength"));
    const currentLength = textBox.value.length;
  
    if (currentLength >= maxLength) {
      textBox.value = textBox.value.substring(0, maxLength);
      alert("You have reached the maximum number of characters.");
    }
  
    const textAreaName = textBox.getAttribute("name");
    const amountLeftSpan = document.getElementById(textAreaName + "-amount-left");
    if (amountLeftSpan) {
      amountLeftSpan.textContent = maxLength - currentLength;
    }
  }
  

