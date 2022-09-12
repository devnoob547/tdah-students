import { useState } from 'react'

function App() {
  return (
    <>
      <section className='flex items-center justify-center p-28 md:p-40 bg-gradient-to-tr from-cyan-500 to-blue-600 text-slate-100'>
        <h1 className='text-lg'>TDAH Students</h1>
      </section>
      <section className='flex flex-col justify-center items-center p-10 text-sm md:p-20 md:text-base'>
        <div className='bg-zinc-100 p-4 max-w-sm rounded-lg shadow-lg shadow-zinc-200 md:p-8 md:max-w-5xl'>
          <h2 className='text-lg font-semibold text-blue-800'>1. Como identificar alunos com TDAH?</h2>
          <div className='m-2 md:m-4 text-zinc-700'>
            <p>Os sintomas de TDAH tem 3 níveis, sendo eles: Baixo, Médio e Superior.</p>
            <div>
              <p className='font-semibold mt-4'>Sintomas do nível baixo:</p>
              <ul className='list-disc ml-4 md:ml-8 flex flex-col gap-4 mt-4'>
                <li>Falta de atenção</li>
                <li>Inquietação e impulsividade</li>
              </ul>
            </div>
            <div>
              <p className='font-semibold mt-4'>Sintomas do nível médio:</p>
              <ul className='list-disc ml-4 md:ml-8 flex flex-col gap-4 mt-4'>
                <li>Dificuldade em prestar atenção a detalhes e tarefas</li>
                <li>Parece não escutar quando se fala diretamente com ele(a)</li>
                <li>Não segue instruções tem problema em terminar tarefas do dia a dia</li>
                <li>Tem dificuldade para se organizar</li>
              </ul>
            </div>
            <div>
              <p className='font-semibold mt-4'>Sintomas do nível superior:</p>
              <ul className='list-disc ml-4 md:ml-8 flex flex-col gap-4 mt-4'>
                <li>Tem dificuldade em ficar sentado em lugares como salas de aula ou recepção</li>
                <li>Corre ou sobe muito nas coisas</li>
                <li>Tem dificuldades para brincar calmamente</li>
                <li>Fala muito, explode em respostas antes das questões serem completadas</li>
                <li>Tem dificuldades em esperar a sua vez e interrompe os outros.</li>
                <li>Às vezes responde com agressividade diante de frustrações</li>
              </ul>
            </div>
            <p className='mt-4'>É possível se destacar crianças com mais de 6 meses, com sintomas de tdah que podem ser considerados: leve, moderado, ou grave</p>
          </div>
        </div>
        <div className='my-6 bg-zinc-100 max-w-sm p-4 rounded-lg shadow-lg shadow-zinc-200 md:max-w-5xl'>
          <h2 className='text-lg font-semibold text-blue-800'>2. Como manter o foco do aluno com TDAH nas aulas</h2>
          <div className='m-4 text-zinc-700'>
            <p>É realmente muito complicado lidar com TDAH na sala de aula, por motivos como barulhos, falatórios e muitas coisas que chamam atenção, fazendo perder o foco, mas com estratégias certas é possível fazer com que o aluno com transtorno tenha um desenvolvimento de forma mais leve e simples</p>
            <div>
              <p className='font-semibold mt-4'>5 formas de fazer o aluno com TDAH ter foco nas aulas:</p>
              <ol className='list-disc ml-8 flex flex-col gap-4 mt-4'>
                <li>Podemos começar estabelecendo sinais para chamar atenção quando notar que a pessoa está começando a se distrair.</li>
                <li>Usar muitos recursos audiovisuais para facilitar o conhecimento e atenção sobre o assunto.</li>
                <li>Utilizar estratégias de aprendizagem, para participação do aluno e realizações de grandes tarefas com organização simples e divididas em etapas resumidas.</li>
                <li>Permitir o aluno de dar uma resposta oral, caso tenho dificuldade de escrever ou vice e versa.</li>
                <li>Estar estabelecendo prazos de atividades e trabalhos para compensar nas dificuldades memoriais.</li>
              </ol>
            </div>
          </div>
        </div>
        <div className='bg-zinc-100 p-4 max-w-sm rounded-lg shadow-lg shadow-zinc-200 md:p-8 md:max-w-5xl'>
          <h2 className='text-lg font-semibold text-blue-800'>3. Como o aluno com TDAH pode estudar sozinho</h2>
          <div className='m-4 text-zinc-700'>
            <p>Todos os alunos ao chegar em certo ponto de seu nível estudantil começam a sentir o peso de uma responsabilidade quanto aos estudos, isso se intensifica ainda mais em se tratando de alunos quem têm TDAH, devido transtorno, o prestar atenção aos estudo em casa se torna um esforço muito grande, visto que, não tem ninguém que o apoie ou ajude no momento muitas vezes.</p>
            <div>
              <p className='mt-4'>Tendo isso em mente separamos alguns pontos que pode ajudar os alunos que têm TDAH a se concentrarem e estudarem sozinhos:</p>
              <ol className='list-disc ml-8 flex flex-col gap-4 mt-4'>
                <li><b>ARRUME SEU LOCAL DE ESTUDO</b>: Para quem tem TDAH um espaço desorganizado pode ser uma grande distração, com um local organizado o seu cérebro terá sensação de tranquilidade e ordem necessária para realização daquela tarefa. Se você vai estudar História por exemplo, deixe em mãos apenas os livros daquela matéria; deixe longe o celular, de modo que não seja uma distração constante.</li>
                <li><b>PARE UM POUCO QUANDO NECESSÁRIO</b>: Se naquele momento o aluno não está conseguindo se concentrar e sabe que se forçar não irá ser produtivo, dê a ele um intervalo, peça para ele tomar água, alongar, arejar a mente para voltar com tudo!</li>
                <li><b>METAS DIÁRIAS:</b> Um sistema de metas é essencial para medir resultados e manter sua atenção no que é realmente importante; antes de tudo delimite seu campo de estudo, com isso definido fica mais fácil organizar seu tempo, além disso pode ser criado um sistema de recompensa para dar mais motivação.</li>
                <li><b>VISUALIZE O CONTEÚDO:</b> Uma boa técnica de aprendizagem está ligada à visualização de imagens. Para melhor absorção o aluno pode usar e abusar de elementos como desenho, colagens, post-its, desenhos de diagramas... Invista nos recursos que mais capturem a atenção.</li>
                <li><b>EXERCÍCIOS FÍSICO:</b> A prática de exercícios físicos libera endorfina e abastece o cérebro com dopamina o que gera sensação de bem-estar, sendo interessantíssimo pois contribui pra o bom funcionamento do lobo frontal de pessoas com TDAH, além disso a prática de exercícios ajuda no lazer que é de extra importância.</li>
              </ol>
            </div>
          </div>
        </div>
        <div className='my-6 bg-zinc-100 p-4 max-w-sm rounded-lg shadow-lg shadow-zinc-200 md:p-8 md:max-w-5xl'>
          <h2 className='text-lg font-semibold text-blue-800'>4. Provas adaptadas</h2>
          <div className='m-4 text-zinc-700'>
            <div className='m-4 text-zinc-700'>
              <p>De fato é notório que algumas provas adaptadas não são eficaz para ajuda de pessoas com TDAH por elas não serem muito complexas, e nem adptadas da maneira certa, um dos meios para poder ajudar nessa causa e mudando a forma em que esses testes são feitos, como por exemplo:</p>
              <div>
                <ul className='list-disc ml-8 flex flex-col gap-4 mt-4'>
                  <li>Realçar questões com cores diferentes</li>
                  <li>Usar acrônimos para criar maneiras engraçadas de lembrar fatos</li>
                  <li>Usar sinais visuais</li>
                  <li>Não usar textos longos e repetitivos</li>
                  <li>Evitar uso de palavras raramente ouvidas ou com significados que muitas vezes não são compreendidos</li>
                </ul>
              </div>
              <p className='mt-4'>Outra maneira de ajudar na causa desse problema é perguntando para aqueles alunos maneiras em que fazem eles conseguirem prender sua atenção naquele momento.</p>
            </div>
          </div>
        </div>
        <div className='bg-zinc-100 p-4 max-w-sm rounded-lg shadow-lg shadow-zinc-200 md:p-8 md:max-w-5xl'>
          <h2 className='text-lg font-semibold text-blue-800'>5. Auxílio na busca do futuro</h2>
          <div className='m-2 md:m-4 text-zinc-700'>
            <div className='m-2 md:m-4 text-zinc-700'>
              <p>É sabido que o TDAH pode trazer inúmeras dificuldades para a vida das pessoas, mas o quanto ele pode afetar o indivíduo no mercado de trabalho? Um estudo realizado na Suécia descobriu que egressos do Ensino Médio com TDAH tendem a receber 17% a menos de salário em comparação com aqueles sem TDAH, e também, são mais propensos a passarem períodos de desemprego e a receberem auxílios por incapacidade.
                Essas diferenças só foram parcialmente explicadas pela diferença de anos de estudo. Análises mostraram que as diferenças salariais e as taxas de desemprego eram menores mesmo entre os indivíduos com TDAH e os controles com o mesmo número de anos de estudo.  Segundo o autor do estudo Andreas Jangmo, do Karolinska Institutet in Stockholm,  “fatores como performance na escola, aspectos comportamentais (ex. desatenção/hiperatividade) e outros são de importância contínua para os desfechos ocupacionais”.
                Segundo Richard Gallagher, Professor associado de psiquiatria no Hassenfeld Children’s Hospital em Nova York, os problemas no controle da atenção e do comportamento no TDAH  prejudicam a capacidade de aprender e aplicar habilidades, fazendo com que pessoas com TDAH entrem no mercado de trabalho com menos conhecimentos e habilidades. Além disso, após a efetivação numa vaga, o transtorno pode afetar a performance no trabalho, impactando na progressão da carreira.
                Porém, Gallagher ressalta, crianças e adolescentes que continuam o seu tratamento têm desfechos melhores que aquelas que não se tratam ou interrompem. “Elas demonstram uma  melhor performance na escola e no trabalho, têm menos problemas legais e usam substâncias ilícitas numa taxa menor”
                conheça uma lista das melhores profissões para quem tem TDAH.</p>
              <div>
                <ul className='list-disc ml-4 md:ml-8 flex flex-col gap-4 mt-4'>
                  <li>
                    <b>Trabalhos agitados</b>
                    <div>
                      <p className='m-2 md:m-4'>Um trabalho agitado pode ser ideal para você que tem TDAH. Caso seus sintomas incluam mais características hiperativas, você pode escolher entre variadas carreiras como:</p>
                      <ul className='list-disc ml-6 md:ml-12 flex flex-col gap-4'>
                        <li>Vendas</li>
                        <li>Aviação</li>
                        <li>Técnico de emergências médicas</li>
                        <li>Engenharia</li>
                        <li>Entretenimento</li>
                        <li>Educação</li>
                        <li>Política</li>
                        <li>Televisão</li>
                        <li>Marketing</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <b>Trabalhos criativos</b>
                    <div>
                      <p className='m-2 md:m-4'>Adultos com TDAH possuem tendência criativa. Por isso, uma profissão que exige criatividade é uma boa opção. Você pode conseguir manter mais o foco nesse tipo de trabalho, além da possibilidade de criar coisas novas e trabalhar com a mão, o que diminui o estresse e a ansiedade. Além disso, tais cargos permitem que você trabalhe com supervisão mínima, o que também é menos estressante. Confira algumas áreas em que você pode trabalhar:</p>
                      <ul className='list-disc ml-6 md:ml-12 flex flex-col gap-4'>
                        <li>Mecânica</li>
                        <li>Construção</li>
                        <li>Design de interiores</li>
                        <li>Editoração eletrônica</li>
                        <li>Produção de filmes</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <b>Teste de carreira</b>
                    <div>
                      <p className='m-2 md:m-4'>Talvez uma opção para você que está em dúvida seja fazer um teste vocacional com um psicólogo. Um teste vocacional vai medir seus interesses, suas aptidões, sua personalidade, além de avaliar habilidades, percepção, raciocínio e memória.
                        Para isso, você vai passar por entrevistas pessoais, testes de personalidade, também de inteligência e avaliações de aptidão profissional.  Dessa forma, será possível indicar algumas possíveis carreiras para você, com base em tudo que você tem de melhor para oferecer.</p>
                    </div>
                  </li>
                  <li>
                    <b>Qualquer carreira</b>
                    <div>
                      <p className='m-2 md:m-4'>Embora não seja fácil lidar com TDAH em algumas situações, nada impede você de ter um emprego dos sonhos. Você pode optar por escolher um emprego focado em seus interesses e habilidades. Você tem mais chance de manter o foco se escolher um local de trabalho de preferência.
                        Com acompanhamento médico, psicoterapia e alguns hábitos de vida para atenuar os sintomas do TDAH, não há nada que impossibilite você de ter uma carreira que aprecie.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
