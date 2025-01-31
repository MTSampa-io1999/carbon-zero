
# APP Carbon Zero

## Resumo Geral

O **APP Carbon Zero** tem como objetivo ajudar na mensuração e redução das emissões de CO₂ de eventos. A seguir estão as etapas de desenvolvimento e funcionalidades do aplicativo:

1. **Prototipagem Interativa**  
   Ferramentas: Figma, Adobe XD, etc.

2. **Planejamento do Desenvolvimento**  
   Escolha da stack tecnológica para o desenvolvimento do app.

3. **Desenvolvimento do Backend**  
   API e Banco de Dados, com Node.js e Express.

4. **Desenvolvimento do Frontend**  
   Interface de usuário com React Native.

5. **Integração e Testes**  
   Conexão do frontend com o backend e realização de testes das funcionalidades.

6. **Refinamento e Ajustes**  
   Ajustes pós-testes e correções para otimização do app.
---

## Etapas do Desenvolvimento

### 1. Descrições dos Wireframes

- **Tela de Cadastro**  
  Campos: Nome completo, E-mail, Senha, Confirmação de senha.  
  Botões: "Cadastrar", "Já possui conta? Faça login" (link para tela de login).

- **Tela de Login**  
  Campos: E-mail, Senha.  
  Botões: "Entrar", "Esqueceu a senha?", "Cadastrar" (link para tela de cadastro).

- **Tela de Coleta de Dados**  
  Coleta de informações sobre o evento, como Transporte, Energia, Resíduos e Específicos do Evento (número de participantes, duração, etc.).

- **Tela de Processamento de Dados**  
  Exibição de um ícone de progresso enquanto os dados são processados.

- **Tela de Dashboard de Resultados**  
  Exibição das emissões totais de CO₂ e gráficos comparativos (barra, pizza).

- **Tela de Feedback e Ajustes**  
  Permite ajustes nos dados para ver como eles afetam a pegada de carbono, com campos para redução de consumo de energia, uso de transporte público, etc.

### 2. Estrutura do Código das Telas

- **Componentes React Native**  
  Componentes para cada tela: Cadastro, Login, Coleta de Dados, etc.  
  Validação de formulários e navegação entre telas com **React Navigation**.

- **Exibição de Gráficos**  
  Utilização de bibliotecas para exibição de gráficos de CO₂ (ex: Chart.js).

### 3. Criação da API com Node.js e Express

- **Configuração do Servidor**  
  Setup do servidor com **Node.js** e **Express**.

- **Endpoints da API**  
  Exemplo: `/calculate-emissions`  
  Lógica para calcular emissões de CO₂ com base nos dados recebidos.

- **Benchmarks**  
  Implementação de benchmarks para comparar as emissões calculadas com eventos similares.

### 4. Integração da API com o App

- **Axios ou Fetch**  
  Integração da API com o frontend, enviando e recebendo dados para exibição.

- **Gerenciamento de Erros**  
  Tratamento de erros em requisições API e exibição adequada de mensagens de erro.

---

## Detalhes das Telas

### 1. Tela de Cadastro

Campos: Nome completo, E-mail, Senha, Confirmação de senha.  
Botões:  
- "Cadastrar"  
- "Já possui conta? Faça login" (link para tela de login)

### 2. Tela de Login

Campos: E-mail, Senha.  
Botões:  
- "Entrar"  
- "Esqueceu a senha?" (link para recuperação de senha)  
- "Cadastrar" (link para tela de cadastro)

### 3. Tela de Coleta de Dados

**Seções:**
1. Transporte: Tipo de veículo, Distância média.
2. Energia: Uso de geradores, Consumo elétrico.
3. Resíduos: Tipos e quantidade estimada de resíduos.
4. Específicos do Evento: Número de participantes, Duração do evento.

Botões:  
- "Próximo" ou “Next”

### 4. Tela de Processamento de Dados

Exibição de um ícone de progresso com a seguinte mensagem:  
*"Processando dados para calcular as emissões de CO₂ com base nas informações fornecidas."*

### 5. Tela de Dashboard de Resultados

Exibição das **Emissões Totais de CO₂** com gráficos de barra ou pizza, e comparação com benchmarks.  
Botões:  
- "Voltar" (para edição dos dados)  
- "Próximos Passos" (link para a tela de feedback e ajustes)

### 6. Tela de Feedback e Ajustes

Campos para ajustes, como redução de consumo de energia, uso de transporte público.  
Botões:  
- "Aplicar Ajustes"  
- "Visualizar Impacto"  
- "Salvar Cenário"
- 


