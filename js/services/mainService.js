lifeblueBlog.service("mainService", function($http){



  this.posts = [
    {
      title : "Blog post title 1",
      author : "John Smith",
      date : "January 5th, 2016",
      featured_image : "../images/featured-image1.jpg",
      categories : ["Category 1", "Category 2"],
      content : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum nisi neque, in volutpat ante ornare vehicula. Vivamus laoreet libero vel libero maximus, condimentum fringilla augue mollis. Etiam posuere augue lorem, egestas commodo lacus sollicitudin ut. Duis sagittis, mauris at accumsan pulvinar, odio leo aliquam urna, a porttitor sem leo nec metus. Quisque eleifend non erat ut laoreet. Vivamus tristique dui neque, quis mollis nibh mattis eget. Nulla et sapien condimentum, venenatis ipsum sit amet, pulvinar turpis. Phasellus posuere augue ac leo dapibus, quis suscipit metus rutrum. In et dolor urna. Proin consectetur massa bibendum lobortis facilisis.

Mauris nec est in nunc venenatis finibus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce id nisl non nisl commodo tristique. Morbi iaculis volutpat mi, et sodales felis ultrices id. Donec aliquet eros eu sagittis hendrerit. Nulla at ornare enim, in iaculis erat. Duis venenatis tempus sollicitudin. Duis purus nulla, efficitur efficitur erat sed, dapibus tincidunt massa. Duis convallis ante ut tortor pellentesque elementum.

Donec erat elit, malesuada rutrum maximus ut, scelerisque sit amet lacus. Donec aliquet condimentum porttitor. Nunc viverra elementum molestie. Nam lacinia aliquam est. Cras varius nisl ut mauris gravida molestie sed sed purus. Duis sed dolor id sapien egestas laoreet eu a nibh. Nullam et elit a metus iaculis ullamcorper. Etiam in aliquet sapien. Nullam ultrices lobortis urna sed pretium. Vestibulum eget libero ac ante vulputate scelerisque in eget justo. Vivamus purus dolor, semper at tempor quis, iaculis id enim.

Fusce sit amet posuere est. Curabitur vel mi et ipsum varius blandit. Fusce varius augue risus, suscipit aliquam justo lacinia vel. Quisque faucibus purus ac porta egestas. Donec in purus et magna vehicula bibendum molestie eu est. Suspendisse pulvinar, turpis eget vestibulum hendrerit, nisl nunc vestibulum diam, a iaculis nisi purus dapibus turpis. Sed convallis lobortis urna, sit amet varius elit convallis vitae. Nulla suscipit elit lorem, eu euismod metus tempus ac. Nulla sollicitudin augue a lectus tristique gravida.

Integer ac laoreet felis. Quisque imperdiet orci at purus commodo, bibendum commodo augue scelerisque. Sed mollis placerat interdum. Fusce ultricies odio et malesuada volutpat. Praesent porta feugiat tempus. Cras leo massa, accumsan ac metus molestie, finibus sollicitudin odio. Proin tristique auctor elit. Cras quis egestas ipsum. Vestibulum fringilla vitae turpis eu porta. Ut placerat commodo eros, sed tincidunt leo gravida id. Pellentesque felis metus, pharetra sed ipsum in, rutrum maximus sapien. Maecenas congue consequat lectus vel ullamcorper. Vestibulum egestas erat eget lectus pulvinar pellentesque. Nam non augue eu sapien semper molestie.`
    },
    {
      title : "Blog post title 2",
      author : "James Hamilton",
      date : "January 8th, 2016",
      featured_image : "../images/featured-image2.png",
      categories : ["Category 3", "Category 6"],
      content : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum nisi neque, in volutpat ante ornare vehicula. Vivamus laoreet libero vel libero maximus, condimentum fringilla augue mollis. Etiam posuere augue lorem, egestas commodo lacus sollicitudin ut. Duis sagittis, mauris at accumsan pulvinar, odio leo aliquam urna, a porttitor sem leo nec metus. Quisque eleifend non erat ut laoreet. Vivamus tristique dui neque, quis mollis nibh mattis eget. Nulla et sapien condimentum, venenatis ipsum sit amet, pulvinar turpis. Phasellus posuere augue ac leo dapibus, quis suscipit metus rutrum. In et dolor urna. Proin consectetur massa bibendum lobortis facilisis.

Mauris nec est in nunc venenatis finibus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce id nisl non nisl commodo tristique. Morbi iaculis volutpat mi, et sodales felis ultrices id. Donec aliquet eros eu sagittis hendrerit. Nulla at ornare enim, in iaculis erat. Duis venenatis tempus sollicitudin. Duis purus nulla, efficitur efficitur erat sed, dapibus tincidunt massa. Duis convallis ante ut tortor pellentesque elementum.

Donec erat elit, malesuada rutrum maximus ut, scelerisque sit amet lacus. Donec aliquet condimentum porttitor. Nunc viverra elementum molestie. Nam lacinia aliquam est. Cras varius nisl ut mauris gravida molestie sed sed purus. Duis sed dolor id sapien egestas laoreet eu a nibh. Nullam et elit a metus iaculis ullamcorper. Etiam in aliquet sapien. Nullam ultrices lobortis urna sed pretium. Vestibulum eget libero ac ante vulputate scelerisque in eget justo. Vivamus purus dolor, semper at tempor quis, iaculis id enim.

Fusce sit amet posuere est. Curabitur vel mi et ipsum varius blandit. Fusce varius augue risus, suscipit aliquam justo lacinia vel. Quisque faucibus purus ac porta egestas. Donec in purus et magna vehicula bibendum molestie eu est. Suspendisse pulvinar, turpis eget vestibulum hendrerit, nisl nunc vestibulum diam, a iaculis nisi purus dapibus turpis. Sed convallis lobortis urna, sit amet varius elit convallis vitae. Nulla suscipit elit lorem, eu euismod metus tempus ac. Nulla sollicitudin augue a lectus tristique gravida.

Integer ac laoreet felis. Quisque imperdiet orci at purus commodo, bibendum commodo augue scelerisque. Sed mollis placerat interdum. Fusce ultricies odio et malesuada volutpat. Praesent porta feugiat tempus. Cras leo massa, accumsan ac metus molestie, finibus sollicitudin odio. Proin tristique auctor elit. Cras quis egestas ipsum. Vestibulum fringilla vitae turpis eu porta. Ut placerat commodo eros, sed tincidunt leo gravida id. Pellentesque felis metus, pharetra sed ipsum in, rutrum maximus sapien. Maecenas congue consequat lectus vel ullamcorper. Vestibulum egestas erat eget lectus pulvinar pellentesque. Nam non augue eu sapien semper molestie.`
    },
    {
      title : "Blog post title 3",
      author : "Ryan Adams",
      date : "January 18th, 2016",
      featured_image : "../images/featured-image3.png",
      categories : ["Category 1", "Category 4"],
      content : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum nisi neque, in volutpat ante ornare vehicula. Vivamus laoreet libero vel libero maximus, condimentum fringilla augue mollis. Etiam posuere augue lorem, egestas commodo lacus sollicitudin ut. Duis sagittis, mauris at accumsan pulvinar, odio leo aliquam urna, a porttitor sem leo nec metus. Quisque eleifend non erat ut laoreet. Vivamus tristique dui neque, quis mollis nibh mattis eget. Nulla et sapien condimentum, venenatis ipsum sit amet, pulvinar turpis. Phasellus posuere augue ac leo dapibus, quis suscipit metus rutrum. In et dolor urna. Proin consectetur massa bibendum lobortis facilisis.

Mauris nec est in nunc venenatis finibus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce id nisl non nisl commodo tristique. Morbi iaculis volutpat mi, et sodales felis ultrices id. Donec aliquet eros eu sagittis hendrerit. Nulla at ornare enim, in iaculis erat. Duis venenatis tempus sollicitudin. Duis purus nulla, efficitur efficitur erat sed, dapibus tincidunt massa. Duis convallis ante ut tortor pellentesque elementum.

Donec erat elit, malesuada rutrum maximus ut, scelerisque sit amet lacus. Donec aliquet condimentum porttitor. Nunc viverra elementum molestie. Nam lacinia aliquam est. Cras varius nisl ut mauris gravida molestie sed sed purus. Duis sed dolor id sapien egestas laoreet eu a nibh. Nullam et elit a metus iaculis ullamcorper. Etiam in aliquet sapien. Nullam ultrices lobortis urna sed pretium. Vestibulum eget libero ac ante vulputate scelerisque in eget justo. Vivamus purus dolor, semper at tempor quis, iaculis id enim.

Fusce sit amet posuere est. Curabitur vel mi et ipsum varius blandit. Fusce varius augue risus, suscipit aliquam justo lacinia vel. Quisque faucibus purus ac porta egestas. Donec in purus et magna vehicula bibendum molestie eu est. Suspendisse pulvinar, turpis eget vestibulum hendrerit, nisl nunc vestibulum diam, a iaculis nisi purus dapibus turpis. Sed convallis lobortis urna, sit amet varius elit convallis vitae. Nulla suscipit elit lorem, eu euismod metus tempus ac. Nulla sollicitudin augue a lectus tristique gravida.

Integer ac laoreet felis. Quisque imperdiet orci at purus commodo, bibendum commodo augue scelerisque. Sed mollis placerat interdum. Fusce ultricies odio et malesuada volutpat. Praesent porta feugiat tempus. Cras leo massa, accumsan ac metus molestie, finibus sollicitudin odio. Proin tristique auctor elit. Cras quis egestas ipsum. Vestibulum fringilla vitae turpis eu porta. Ut placerat commodo eros, sed tincidunt leo gravida id. Pellentesque felis metus, pharetra sed ipsum in, rutrum maximus sapien. Maecenas congue consequat lectus vel ullamcorper. Vestibulum egestas erat eget lectus pulvinar pellentesque. Nam non augue eu sapien semper molestie.`
    },
    {
      title : "Blog post title 4",
      author : "Cara Hanson",
      date : "February 12th, 2016",
      featured_image : "../images/featured-image4.jpeg",
      categories : ["Category 2", "Category 5"],
      content : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum nisi neque, in volutpat ante ornare vehicula. Vivamus laoreet libero vel libero maximus, condimentum fringilla augue mollis. Etiam posuere augue lorem, egestas commodo lacus sollicitudin ut. Duis sagittis, mauris at accumsan pulvinar, odio leo aliquam urna, a porttitor sem leo nec metus. Quisque eleifend non erat ut laoreet. Vivamus tristique dui neque, quis mollis nibh mattis eget. Nulla et sapien condimentum, venenatis ipsum sit amet, pulvinar turpis. Phasellus posuere augue ac leo dapibus, quis suscipit metus rutrum. In et dolor urna. Proin consectetur massa bibendum lobortis facilisis.

Mauris nec est in nunc venenatis finibus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce id nisl non nisl commodo tristique. Morbi iaculis volutpat mi, et sodales felis ultrices id. Donec aliquet eros eu sagittis hendrerit. Nulla at ornare enim, in iaculis erat. Duis venenatis tempus sollicitudin. Duis purus nulla, efficitur efficitur erat sed, dapibus tincidunt massa. Duis convallis ante ut tortor pellentesque elementum.

Donec erat elit, malesuada rutrum maximus ut, scelerisque sit amet lacus. Donec aliquet condimentum porttitor. Nunc viverra elementum molestie. Nam lacinia aliquam est. Cras varius nisl ut mauris gravida molestie sed sed purus. Duis sed dolor id sapien egestas laoreet eu a nibh. Nullam et elit a metus iaculis ullamcorper. Etiam in aliquet sapien. Nullam ultrices lobortis urna sed pretium. Vestibulum eget libero ac ante vulputate scelerisque in eget justo. Vivamus purus dolor, semper at tempor quis, iaculis id enim.

Fusce sit amet posuere est. Curabitur vel mi et ipsum varius blandit. Fusce varius augue risus, suscipit aliquam justo lacinia vel. Quisque faucibus purus ac porta egestas. Donec in purus et magna vehicula bibendum molestie eu est. Suspendisse pulvinar, turpis eget vestibulum hendrerit, nisl nunc vestibulum diam, a iaculis nisi purus dapibus turpis. Sed convallis lobortis urna, sit amet varius elit convallis vitae. Nulla suscipit elit lorem, eu euismod metus tempus ac. Nulla sollicitudin augue a lectus tristique gravida.

Integer ac laoreet felis. Quisque imperdiet orci at purus commodo, bibendum commodo augue scelerisque. Sed mollis placerat interdum. Fusce ultricies odio et malesuada volutpat. Praesent porta feugiat tempus. Cras leo massa, accumsan ac metus molestie, finibus sollicitudin odio. Proin tristique auctor elit. Cras quis egestas ipsum. Vestibulum fringilla vitae turpis eu porta. Ut placerat commodo eros, sed tincidunt leo gravida id. Pellentesque felis metus, pharetra sed ipsum in, rutrum maximus sapien. Maecenas congue consequat lectus vel ullamcorper. Vestibulum egestas erat eget lectus pulvinar pellentesque. Nam non augue eu sapien semper molestie.`
    },
    {
      title : "Blog post title 5",
      author : "Hayden Moore",
      date : "March 8th, 2016",
      featured_image : "../images/featured-image5.jpg",
      categories : ["Category 3", "Category 6"],
      content : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum nisi neque, in volutpat ante ornare vehicula. Vivamus laoreet libero vel libero maximus, condimentum fringilla augue mollis. Etiam posuere augue lorem, egestas commodo lacus sollicitudin ut. Duis sagittis, mauris at accumsan pulvinar, odio leo aliquam urna, a porttitor sem leo nec metus. Quisque eleifend non erat ut laoreet. Vivamus tristique dui neque, quis mollis nibh mattis eget. Nulla et sapien condimentum, venenatis ipsum sit amet, pulvinar turpis. Phasellus posuere augue ac leo dapibus, quis suscipit metus rutrum. In et dolor urna. Proin consectetur massa bibendum lobortis facilisis.

Mauris nec est in nunc venenatis finibus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce id nisl non nisl commodo tristique. Morbi iaculis volutpat mi, et sodales felis ultrices id. Donec aliquet eros eu sagittis hendrerit. Nulla at ornare enim, in iaculis erat. Duis venenatis tempus sollicitudin. Duis purus nulla, efficitur efficitur erat sed, dapibus tincidunt massa. Duis convallis ante ut tortor pellentesque elementum.

Donec erat elit, malesuada rutrum maximus ut, scelerisque sit amet lacus. Donec aliquet condimentum porttitor. Nunc viverra elementum molestie. Nam lacinia aliquam est. Cras varius nisl ut mauris gravida molestie sed sed purus. Duis sed dolor id sapien egestas laoreet eu a nibh. Nullam et elit a metus iaculis ullamcorper. Etiam in aliquet sapien. Nullam ultrices lobortis urna sed pretium. Vestibulum eget libero ac ante vulputate scelerisque in eget justo. Vivamus purus dolor, semper at tempor quis, iaculis id enim.

Fusce sit amet posuere est. Curabitur vel mi et ipsum varius blandit. Fusce varius augue risus, suscipit aliquam justo lacinia vel. Quisque faucibus purus ac porta egestas. Donec in purus et magna vehicula bibendum molestie eu est. Suspendisse pulvinar, turpis eget vestibulum hendrerit, nisl nunc vestibulum diam, a iaculis nisi purus dapibus turpis. Sed convallis lobortis urna, sit amet varius elit convallis vitae. Nulla suscipit elit lorem, eu euismod metus tempus ac. Nulla sollicitudin augue a lectus tristique gravida.

Integer ac laoreet felis. Quisque imperdiet orci at purus commodo, bibendum commodo augue scelerisque. Sed mollis placerat interdum. Fusce ultricies odio et malesuada volutpat. Praesent porta feugiat tempus. Cras leo massa, accumsan ac metus molestie, finibus sollicitudin odio. Proin tristique auctor elit. Cras quis egestas ipsum. Vestibulum fringilla vitae turpis eu porta. Ut placerat commodo eros, sed tincidunt leo gravida id. Pellentesque felis metus, pharetra sed ipsum in, rutrum maximus sapien. Maecenas congue consequat lectus vel ullamcorper. Vestibulum egestas erat eget lectus pulvinar pellentesque. Nam non augue eu sapien semper molestie.`
    },
    {
      title : "Blog post title 6",
      author : "Connor Myers",
      date : "April 1st, 2016",
      featured_image : "../images/featured-image6.jpg",
      categories : ["Category 3", "Category 6"],
      content : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum nisi neque, in volutpat ante ornare vehicula. Vivamus laoreet libero vel libero maximus, condimentum fringilla augue mollis. Etiam posuere augue lorem, egestas commodo lacus sollicitudin ut. Duis sagittis, mauris at accumsan pulvinar, odio leo aliquam urna, a porttitor sem leo nec metus. Quisque eleifend non erat ut laoreet. Vivamus tristique dui neque, quis mollis nibh mattis eget. Nulla et sapien condimentum, venenatis ipsum sit amet, pulvinar turpis. Phasellus posuere augue ac leo dapibus, quis suscipit metus rutrum. In et dolor urna. Proin consectetur massa bibendum lobortis facilisis.

Mauris nec est in nunc venenatis finibus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce id nisl non nisl commodo tristique. Morbi iaculis volutpat mi, et sodales felis ultrices id. Donec aliquet eros eu sagittis hendrerit. Nulla at ornare enim, in iaculis erat. Duis venenatis tempus sollicitudin. Duis purus nulla, efficitur efficitur erat sed, dapibus tincidunt massa. Duis convallis ante ut tortor pellentesque elementum.

Donec erat elit, malesuada rutrum maximus ut, scelerisque sit amet lacus. Donec aliquet condimentum porttitor. Nunc viverra elementum molestie. Nam lacinia aliquam est. Cras varius nisl ut mauris gravida molestie sed sed purus. Duis sed dolor id sapien egestas laoreet eu a nibh. Nullam et elit a metus iaculis ullamcorper. Etiam in aliquet sapien. Nullam ultrices lobortis urna sed pretium. Vestibulum eget libero ac ante vulputate scelerisque in eget justo. Vivamus purus dolor, semper at tempor quis, iaculis id enim.

Fusce sit amet posuere est. Curabitur vel mi et ipsum varius blandit. Fusce varius augue risus, suscipit aliquam justo lacinia vel. Quisque faucibus purus ac porta egestas. Donec in purus et magna vehicula bibendum molestie eu est. Suspendisse pulvinar, turpis eget vestibulum hendrerit, nisl nunc vestibulum diam, a iaculis nisi purus dapibus turpis. Sed convallis lobortis urna, sit amet varius elit convallis vitae. Nulla suscipit elit lorem, eu euismod metus tempus ac. Nulla sollicitudin augue a lectus tristique gravida.

Integer ac laoreet felis. Quisque imperdiet orci at purus commodo, bibendum commodo augue scelerisque. Sed mollis placerat interdum. Fusce ultricies odio et malesuada volutpat. Praesent porta feugiat tempus. Cras leo massa, accumsan ac metus molestie, finibus sollicitudin odio. Proin tristique auctor elit. Cras quis egestas ipsum. Vestibulum fringilla vitae turpis eu porta. Ut placerat commodo eros, sed tincidunt leo gravida id. Pellentesque felis metus, pharetra sed ipsum in, rutrum maximus sapien. Maecenas congue consequat lectus vel ullamcorper. Vestibulum egestas erat eget lectus pulvinar pellentesque. Nam non augue eu sapien semper molestie.`
    }
  ]

})
