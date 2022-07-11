players = [
{
    "name": "Kevin Durant", 
    "age":34, 
    "position": "small forward", 
    "team": "Brooklyn Nets"
},
{
    "name": "Jason Tatum", 
    "age":24, 
    "position": "small forward", 
    "team": "Boston Celtics"
},
{
    "name": "Kyrie Irving", 
    "age":32,
    "position": "Point Guard", 
    "team": "Brooklyn Nets"
},
{
    "name": "Damian Lillard", 
    "age":33,
    "position": "Point Guard", 
    "team": "Portland Trailblazers"
},
{
    "name": "Joel Embiid", 
    "age":32,
    "position": "Power Foward", 
    "team": "Philidelphia 76ers"
},
{
    "name": "DeMar DeRozan",
    "age": 32,
    "position": "Shooting Guard",
    "team": "Chicago Bulls"
}
]


class Player:
    new_Team = []
    def __init__(self, dict):
        self.name = dict["name"]
        self.age = dict["age"]
        self.position = dict["position"]
        self.team = dict["team"]
        Player.new_Team.append(self)

    # @classmethod
    # def get_team(cls):
    #     for i in cls.players:
    #         cls.new_team.append[players[i]]
    #     return self

    def display(self):
        print(f"{self.name},{self.age},{self.position},{self.team}") #fstring to product string in class method
        #doesn't need return if just printing/retrieving

    @classmethod
    def display_info(cls, new_Team):
        for p in new_Team:
            print(p["name"],p["age"],p["position"],p["team"])
        #no return


player1 = Player(players[1])
print(player1.name)

player2 = Player(players[2])
player3 = Player(players[3])

player2.display()
Player.display_info(players)





# player_kevin = Player(players[0]["name"], players[0]["age"],players[0]["position"],players[0]["team"])
# player_jason = Player(players[1]["name"], players[1]["age"],players[1]["position"],players[1]["team"])
# player_kyrie = Player(players[2]["name"], players[2]["age"],players[2]["position"],players[2]["team"])
# player_damian = Player(players[3]["name"], players[3]["age"],players[3]["position"],players[3]["team"])
# player_joel = Player(players[4]["name"], players[4]["age"],players[4]["position"],players[4]["team"])
# player_deMar = Player(players[5]["name"], players[5]["age"],players[5]["position"],players[5]["team"])


