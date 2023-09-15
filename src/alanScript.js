intent("My name is $(NAME)", (p) => {
  if (p.NAME.value) {
    p.play({
      command: "name",
      data: p.NAME.value,
    });
  } else {
    p.play(`Not able to read name`);
  }
});

intent("Age is $(AGE)", (p) => {
  if (p.AGE.value) {
    p.play({
      command: "age",
      data: p.AGE.value,
    });
  } else {
    p.play(`Not able to read age`);
  }
});

const phoneNumber = "\\d{3}-\\d{3}-\\d{4}$";

intent(`My phone number is $(PHONE* ${phoneNumber})`, (p) => {
  if (p.PHONE.value) {
    p.play({
      command: "phone",
      data: p.PHONE.value,
    });
  } else {
    p.play(`Not able to read phone number`);
  }
});

intent("I live at $(LOC)", (p) => {
  if (p.LOC.value) {
    p.play({
      command: "address",
      data: p.LOC.value,
    });
  } else {
    p.play(`Not able to read address`);
  }
});
