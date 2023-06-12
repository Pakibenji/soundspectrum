class UserResource < Avo::BaseResource
  self.title = :id
  self.includes = []
  self.default_view_type = :table
  # self.search_query = -> do
  #   scope.ransack(id_eq: params[:q], m: "or").result(distinct: false)
  # end

  field :id, as: :id
  # Fields generated from the model
  field :email, as: :text
  # add fields here
  field :name, as: :text
  field :password, as: :password
end
