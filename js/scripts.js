$(document).ready(function() {
  $("form#profile").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    if (age) {
      var celebrity = age;
      if (gender === 'male' && age < 26) {
        celebrity = ('Taylor Swift');
        image = ('#swift');
      } else if (gender === 'male' && age >= 26) {
        celebrity = ('Jennifer Lopez');
        image = ('#jennifer');
      } else if (gender === 'female' && age < 26) {
        celebrity = ('Justin Bieber');
        image = ('#bieber');
      } else if (gender === 'female' && age >= 26) {
        celebrity = ('Mario Lopez');
        image = ('#mario');
      }

      $("#result").empty().append(celebrity);
      $("#celebrity").show();
      $(image).show();
    } else {
      alert('Please finish entering your info.');
    }

    event.preventDefault();
  });
});