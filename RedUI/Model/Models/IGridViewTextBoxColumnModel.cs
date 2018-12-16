using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Models
{
	public interface IGridViewTextBoxColumnModel : IGridViewColumnModel
	{
		bool isRequired { get; }
		string pattern { get; }
		string validationErrorMessage { get; }
	}
}
