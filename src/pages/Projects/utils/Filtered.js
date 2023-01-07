const projetos = [
  'projetos',
  'Estudos-para-Full-Stack',
  'Erik-EFL',
  'Erik',
  'CSS_For_ALL',
  'bootcamp-lauchbase',
  '100DaysOfCode',
  'AiqFome-clone',
  'Lesons-Learned-Project',
  'nlwReturn',
]

export const filtered = (projects) => {
  /* retirar os projetos */
  const filtered = projects.filter((project) => {
    return !projetos.includes(project.name)
  })

  const clearForkedProjects = filtered.filter((project) => {
    return project.fork === false
  })

  return clearForkedProjects
};
