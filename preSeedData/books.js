const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", isbn: "9780061120084", summary: "Set in the 1930s in the American South, this Pulitzer Prize-winning novel tells the story of a young girl named Scout Finch, whose father, Atticus Finch, is a lawyer defending a black man falsely accused of raping a white woman.", genre: "Fiction", publishedDate: "1960-07-11" },
    { title: "1984", author: "George Orwell", isbn: "9780451524935", summary: "1984 is a dystopian novel set in a totalitarian society ruled by 'Big Brother,' where the government exercises complete control over all aspects of life, including truth itself.", genre: "Dystopian, Science Fiction", publishedDate: "1949-06-08" },
    { title: "Pride and Prejudice", author: "Jane Austen", isbn: "9780141439518", summary: "This classic novel of manners explores the life of Elizabeth Bennet, a witty and independent woman who must navigate the expectations of society and her developing feelings toward the seemingly aloof Mr. Darcy.", genre: "Romance, Classic Literature", publishedDate: "1813-01-28" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", isbn: "9780743273565", summary: "Set in the Roaring Twenties, The Great Gatsby tells the story of the mysterious Jay Gatsby, a wealthy man who throws extravagant parties in hopes of rekindling a lost love with Daisy Buchanan.", genre: "Classic Literature", publishedDate: "1925-04-10" },
    { title: "Moby-Dick", author: "Herman Melville", isbn: "9781851244422", summary: "Moby-Dick is the story of Ishmael, a sailor who joins the whaling ship Pequod, captained by the obsessed Ahab. Ahab's sole goal is to hunt and kill the white whale, Moby-Dick, which severed his leg during a previous encounter.", genre: "Adventure, Classic Literature", publishedDate: "1851-11-14" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", isbn: "9780316769488", summary: "Narrated by Holden Caulfield, a disaffected teenager, The Catcher in the Rye captures his experiences and struggles with growing up, identity, and the world around him.", genre: "Literary Fiction, Coming-of-Age", publishedDate: "1951-07-16" },
    { title: "Brave New World", author: "Aldous Huxley", isbn: "9780060850524", summary: "Set in a future society where technology, consumerism, and the state regulate every aspect of life, Brave New World explores the implications of a world where humans are engineered, conditioned for specific roles, and kept in line by pleasure-inducing drugs.", genre: "Dystopian, Science Fiction", publishedDate: "1932-08-31" },
    { title: "The Hobbit", author: "J.R.R. Tolkien", isbn: "9780261103344", summary: "The Hobbit follows the journey of Bilbo Baggins, a hobbit who is reluctantly drawn into an adventure to reclaim a stolen treasure from the dragon Smaug. Along the way, Bilbo faces trolls, goblins, elves, and ultimately discovers his own courage and wit.", genre: "Fantasy, Adventure", publishedDate: "1937-09-21" },
    { title: "The Book Thief", author: "Markus Zusak", isbn: "9780375842207", summary: "Set in Nazi Germany, The Book Thief tells the story of Liesel Meminger, a young girl who steals books and shares them with others in her community, including the Jewish man hiding in her basement.", genre: "Historical Fiction", publishedDate: "2005-03-14" },
    { title: "The Alchemist", author: "Paulo Coelho", isbn: "9780061122415", summary: "The Alchemist is an allegorical novel about Santiago, a shepherd boy who dreams of finding a treasure located in Egypt. As he journeys to fulfill his dream, he learns valuable lessons about following his dreams and listening to his heart.", genre: "Adventure, Philosophy, Fiction", publishedDate: "1988-05-01" },
    { title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", isbn: "9780062316097", summary: "Sapiens traces the history of humanity from the Stone Age to the present, exploring how Homo sapiens evolved, dominated the Earth, and shaped the world through culture, science, and technology.", genre: "Non-Fiction, History, Philosophy", publishedDate: "2011-01-01" },
    { title: "The Odyssey", author: "Homer", isbn: "9780140268867", summary: "The Odyssey is the epic tale of Odysseus's 10-year journey home after the Trojan War. Along the way, he encounters gods, monsters, and challenges that test his resolve, intellect, and leadership.", genre: "Epic, Classic Literature", publishedDate: "800-01-01" },
    { title: "Crime and Punishment", author: "Fyodor Dostoevsky", isbn: "9780140449136", summary: "This novel follows the troubled Raskolnikov, a young man who commits murder and struggles with guilt, morality, and his inner demons as he navigates the consequences of his crime.", genre: "Philosophical Fiction", publishedDate: "1866-01-01" },
    { title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", isbn: "9780374528379", summary: "A complex and deeply philosophical novel, The Brothers Karamazov explores themes of faith, free will, and morality through the lives of three brothers and their relationship with their father.", genre: "Philosophical Fiction", publishedDate: "1880-11-01" },
    { title: "The Little Prince", author: "Antoine de Saint-Exupéry", isbn: "9780156012195", summary: "The Little Prince is a story about a young prince who travels from planet to planet, meeting strange adults and discovering the meaning of life, love, and friendship through simple yet profound lessons.", genre: "Children's Literature, Philosophical Fiction", publishedDate: "1943-04-06" },
    { title: "The Shining", author: "Stephen King", isbn: "9780385121675", summary: "Jack Torrance takes a job as the winter caretaker of the isolated Overlook Hotel, bringing his wife Wendy and son Danny. As the hotel’s dark past begins to take hold, Jack's sanity begins to unravel in this terrifying psychological horror novel.", genre: "Horror, Thriller", publishedDate: "1977-01-28" },
    { title: "Catch-22", author: "Joseph Heller", isbn: "9781451626650", summary: "Catch-22 is a dark satire set during World War II, following Captain Yossarian as he tries to escape the madness of war. The novel’s title refers to a no-win situation where soldiers must continue to fight unless declared insane, but anyone who wishes to be declared insane is considered sane.", genre: "Satire, War Fiction", publishedDate: "1961-11-10" },
    { title: "The Road", author: "Cormac McCarthy", isbn: "9780307387899", summary: "The Road is a post-apocalyptic novel that tells the story of a father and son journeying through a desolate America, struggling to survive while facing the brutalities of a collapsed world.", genre: "Post-Apocalyptic, Literary Fiction", publishedDate: "2006-09-26" },
    { title: "The Girl on the Train", author: "Paula Hawkins", isbn: "9781594633669", summary: "The Girl on the Train is a psychological thriller about Rachel, a woman who becomes entangled in a missing persons case after witnessing something suspicious during her daily train commute.", genre: "Thriller, Mystery", publishedDate: "2015-01-13" },
    { title: "The Hunger Games", author: "Suzanne Collins", isbn: "9780439023528", summary: "In a dystopian future, the 12 districts of Panem are forced to send one boy and one girl to participate in the Hunger Games, a televised fight to the death. Katniss Everdeen volunteers to take her sister's place, setting off a chain of events that will change her world forever.", genre: "Dystopian, Young Adult, Science Fiction", publishedDate: "2008-09-14" },
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", isbn: "9780439708180", summary: "Harry Potter, a young wizard, learns on his 11th birthday that he is the son of two famous wizards and attends Hogwarts School of Witchcraft and Wizardry. The book follows his first year at Hogwarts, filled with magic, friendships, and an ancient mystery involving the Sorcerer's Stone.", genre: "Fantasy, Young Adult", publishedDate: "1997-06-26" },
    { title: "Lord of the Rings: The Fellowship of the Ring", author: "J.R.R. Tolkien", isbn: "9780618645619", summary: "Frodo Baggins embarks on a perilous journey to destroy the One Ring, an object of great evil that must be cast into the fires of Mount Doom to prevent the Dark Lord Sauron from conquering Middle-earth.", genre: "Fantasy, Adventure", publishedDate: "1954-07-29" },
    { title: "The Chronicles of Narnia", author: "C.S. Lewis", isbn: "9780064404993", summary: "The Chronicles of Narnia is a series of seven fantasy novels, beginning with The Lion, the Witch, and the Wardrobe. The series follows the adventures of children who enter the magical land of Narnia and help defeat the evil White Witch.", genre: "Fantasy, Children's Literature", publishedDate: "1950-10-16" },
    { title: "The Outsiders", author: "S.E. Hinton", isbn: "9780142407332", summary: "The Outsiders is the story of Ponyboy Curtis and his gang of friends, the Greasers, who face off against the wealthier Socs. The novel explores themes of friendship, loyalty, and social class.", genre: "Young Adult, Coming-of-Age", publishedDate: "1967-04-09" },
    { title: "The Fault in Our Stars", author: "John Green", isbn: "9780525478812", summary: "Two teenagers, Hazel and Gus, fall in love after meeting at a cancer support group. Their relationship is challenged by their illnesses and the realities of life, making this a heartbreaking and uplifting story about love, life, and loss.", genre: "Young Adult, Romance", publishedDate: "2012-01-10" },
    { title: "The Picture of Dorian Gray", author: "Oscar Wilde", isbn: "9780141442464", summary: "The Picture of Dorian Gray tells the story of Dorian, a young man whose portrait ages while he remains young and beautiful. As Dorian leads a life of excess and indulgence, his portrait reflects the consequences of his actions.", genre: "Gothic Fiction", publishedDate: "1890-07-01" },
    { title: "Frankenstein", author: "Mary Shelley", isbn: "9780141439471", summary: "Frankenstein follows the story of Victor Frankenstein, a scientist who creates a creature from body parts. The novel explores themes of ambition, isolation, and the dangers of unchecked scientific experimentation.", genre: "Gothic Fiction, Horror", publishedDate: "1818-01-01" },
    { title: "The Kite Runner", author: "Khaled Hosseini", isbn: "9781594631900", summary: "The Kite Runner tells the story of Amir, a young boy from a wealthy family in Kabul, and his complicated relationship with his servant’s son, Hassan. The novel explores themes of guilt, redemption, and the power of friendship.", genre: "Historical Fiction", publishedDate: "2003-05-29" },
    { title: "The Hunger Games: Catching Fire", author: "Suzanne Collins", isbn: "9780439027007", summary: "In the second book of the Hunger Games trilogy, Katniss Everdeen returns home to District 12 after winning the 74th Hunger Games, only to face new challenges and threats from the Capitol.", genre: "Dystopian, Young Adult", publishedDate: "2009-09-01" },
    { title: "The Hunger Games: Mockingjay", author: "Suzanne Collins", isbn: "9780439023528", summary: "The final installment in the Hunger Games trilogy, Mockingjay follows Katniss as she becomes the symbol of rebellion against the Capitol, battling both external and internal forces to end the war.", genre: "Dystopian, Young Adult", publishedDate: "2010-08-24" },
    { title: "The Help", author: "Kathryn Stockett", isbn: "9780399155345", summary: "The Help tells the story of three women in 1960s Mississippi, exploring the complexities of race and relationships in a segregated Southern town.", genre: "Historical Fiction", publishedDate: "2009-02-10" },
    { title: "The Glass Castle", author: "Jeannette Walls", isbn: "9780743247542", summary: "The Glass Castle is a memoir about Jeannette Walls' dysfunctional childhood and her journey toward independence, success, and forgiveness of her parents' failures.", genre: "Memoir", publishedDate: "2005-01-01" },
    { title: "The 5th Wave", author: "Rick Yancey", isbn: "9780399160349", summary: "After a series of apocalyptic waves decimates humanity, 16-year-old Cassie Sullivan fights for survival against an alien invasion, all while trying to find her brother and a way to defeat the aliens.", genre: "Dystopian, Science Fiction", publishedDate: "2013-05-07" },
    { title: "The Maze Runner", author: "James Dashner", isbn: "9780385737944", summary: "Thomas wakes up in a maze with no memory of his past, and he must work with a group of other boys to survive and find a way out of the maze.", genre: "Dystopian, Young Adult", publishedDate: "2009-10-06" },
    { title: "The Giver", author: "Lois Lowry", isbn: "9780385732550", summary: "In a dystopian society where emotions are suppressed and memories are erased, Jonas is chosen to be the Receiver of Memory, learning the truth about his world and the importance of freedom and choice.", genre: "Dystopian, Young Adult", publishedDate: "1993-04-26" },
    { title: "The Outsiders", author: "S.E. Hinton", isbn: "9780142407332", summary: "Ponyboy Curtis, a member of a gang of working-class youths known as the Greasers, navigates friendship, love, and rivalry in a turbulent world of class division.", genre: "Young Adult, Coming-of-Age", publishedDate: "1967-04-09" }
  ];

 module.exports = books;
  