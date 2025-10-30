import { useEffect, useState } from "react";

export default function App() {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query User {
            user(id: 10) {
              id
              name
              powerstats {
                intelligence
                strength
                speed
                durability
                power
                combat
              }
              biography {
                fullName
                alterEgos
                aliases
                placeOfBirth
                firstAppearance
                publisher
              }
              appearance {
                gender
                race
                height
                weight
                eyeColor
                hairColor
              }
              work {
                occupation
                base
              }
              connections {
                groupAffiliation
                relatives
              }
              image {
                url
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('GraphQL Response:', data); // Debug
        if (data.errors) {
          console.error('GraphQL Errors:', data.errors);
        }
        setHero(data.data?.user);
      })
      .catch((err) => console.error('Fetch Error:', err));
  }, []);

  if (!hero) return <p>Carregando...</p>;

  console.log('Hero data:', hero); // Debug
  
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{hero.name}</h1>
      {hero.image?.url ? (
        <img 
          src={hero.image.url} 
          alt={hero.name} 
          width={200} 
          onError={(e) => {
            console.error('Erro ao carregar imagem:', hero.image.url);
            e.target.style.display = 'none';
          }}
        />
      ) : (
        <p>Imagem não disponível</p>
      )}
      <p><strong>Ocupação:</strong> {hero.work?.occupation}</p>
      <p><strong>Raça:</strong> {hero.appearance?.race}</p>
      <p><strong>Força:</strong> {hero.powerstats?.strength}</p>
    </div>
  );
}
